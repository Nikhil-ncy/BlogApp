import React from "react";
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";

const Single = () =>{

    return (
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/18369349/pexels-photo-18369349/free-photo-of-tet-holiday-in-vietnam.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <div className="info">
                        <b><span>Jesika</span><br></br></b>
                        <span>Posted 3 days ago</span>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=1`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu. Pellentesque id nibh tortor id aliquet lectus proin. Ac turpis egestas sed tempus urna et pharetra pharetra. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Mollis nunc sed id semper risus in hendrerit. Ut enim blandit volutpat maecenas. Iaculis urna id volutpat lacus laoreet non curabitur. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Habitant morbi tristique senectus et netus. Convallis aenean et tortor at risus viverra adipiscing. Fermentum et sollicitudin ac orci phasellus egestas. In hendrerit gravida rutrum quisque non tellus orci. Id porta nibh venenatis cras. Nullam eget felis eget nunc lobortis mattis.<br></br><br></br>
Et tortor consequat id porta nibh. Morbi tristique senectus et netus et malesuada fames ac. Sagittis orci a scelerisque purus. Volutpat sed cras ornare arcu dui vivamus. Eu nisl nunc mi ipsum. Dictumst vestibulum rhoncus est pellentesque elit. Egestas erat imperdiet sed euismod nisi porta lorem. Sed cras ornare arcu dui vivamus arcu felis. Sed vulputate odio ut enim blandit volutpat. Lacinia quis vel eros donec ac odio tempor. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Blandit turpis cursus in hac habitasse platea dictumst quisque. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Quam id leo in vitae turpis. Urna duis convallis convallis tellus id. Molestie at elementum eu facilisis sed odio morbi quis. Libero volutpat sed cras ornare arcu dui vivamus arcu.<br></br><br></br>
Massa eget egestas purus viverra accumsan. Quis lectus nulla at volutpat diam ut venenatis tellus. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Sit amet aliquam id diam maecenas ultricies mi eget. Viverra nam libero justo laoreet sit amet. Arcu odio ut sem nulla pharetra diam. Vulputate dignissim suspendisse in est. Varius vel pharetra vel turpis nunc eget. Euismod quis viverra nibh cras pulvinar mattis nunc sed.<br></br><br></br>
Nisi est sit amet facilisis. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Magna fringilla urna porttitor rhoncus dolor purus non enim. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget nulla facilisi etiam dignissim diam quis enim. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Hac habitasse platea dictumst quisque sagittis purus sit amet. Montes nascetur ridiculus mus mauris vitae. Sit amet facilisis magna etiam tempor orci eu. Tortor pretium viverra suspendisse potenti nullam. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Pharetra pharetra massa massa ultricies mi quis hendrerit. Volutpat blandit aliquam etiam erat velit scelerisque in. Blandit libero volutpat sed cras ornare arcu dui.<br></br><br></br>
Non tellus orci ac auctor. Feugiat in ante metus dictum at. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sed adipiscing diam donec adipiscing tristique risus nec. Vestibulum rhoncus est pellentesque elit. Sapien faucibus et molestie ac. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Risus sed vulputate odio ut enim. Hac habitasse platea dictumst quisque sagittis. Mattis nunc sed blandit libero. Diam maecenas ultricies mi eget mauris pharetra. Ipsum a arcu cursus vitae congue mauris. Mattis pellentesque id nibh tortor id aliquet lectus proin. Enim tortor at auctor urna nunc id cursus metus aliquam. Viverra justo nec ultrices dui sapien eget. Pellentesque nec nam aliquam sem et tortor consequat id.</p>
            </div>
            <Menu/>
        </div>
    )
}

export default Single