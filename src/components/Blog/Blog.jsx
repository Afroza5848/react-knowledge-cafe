import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
   
    const {cover_img,title} = blog

    return (
        <div>
            <div>
                <img src={cover_img} alt="" />
            </div>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <p></p>
                    </div>
                </div>
                <div>
                    <p></p>
                    <button></button>
                </div>
            </div>

        </div>
    );
};



Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;