// import React, {useEffect, useState} from 'react';
import "../Style/ViewComponent.css"
import React from 'react';
import AddView from './AddView';
// function ViewComponent() {
//     const [views, setViews]=useState([]);
//     // useEffect(() =>{
//     //     localStorage.setItem('views', views);
//     // }, [localStorage])
//     function setView(data) {
//         let newViews = views;
//         newViews.push(data);
//         setViews(newViews);
//         console.log(views);
//     }
//     if (views.length > 0) {
//         return (
//             <div className='views-block' >
//                 {views.map((view,i) => {
//                     <div key={i} className="view-block">
//                         <div className="view-block_name">
//                             <p className="view-name">{view.name}</p>
//                         </div>
//                         <div className="view-block_info">
//                             <p className='view-info'>{view.view}</p>
//                         </div>
//                     </div>
//                 }
//                 )}
//                 <AddView addNewView={setView}/>
//             </div>
//         );
//     } else {
//         return (
//             <div className=''>
//                 <h3>У вас пока нет отзывов</h3>
//                 <AddView addNewView={setView}/>
//             </div>
//         )
//     }
// }
class ViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            views: [],
        }
    }
    setView = (data) => {
        let newViews = this.state.views;
        newViews.push(data);
        console.log(newViews);
        this.setState({ views: newViews });

        // console.log(this.state.views);
    }
    render() {
        console.log(JSON.stringify(this.state.views));
        if (this.state.views.length > 0) {
            return (
                <div>

                    <div className='views-block' >
                        {this.state.views.map((view, i) => {
                            return (
                                <div key={i} className="view-block">
                                    <div className="view-block_name">
                                        <h3 className="view-name">Имя - <span className='view-name_span'>{view.name}</span></h3>
                                    </div>
                                    <div className="view-block_info">
                                        <h3 className='view-info'>Отзыв -<span className='view-info_span'>{view.viewText}</span></h3>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                    <AddView addNewView={this.setView} />
                </div>
            );
        } else {
            return (
                <div>
                    <div className='views-block'>
                        <h3 className="no-reviews-mes">У вас пока нет отзывов</h3>
                    </div>
                    <AddView addNewView={this.setView} />
                </div>
            )
        }
    }
}

export default ViewComponent;