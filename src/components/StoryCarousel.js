import React,{useState} from 'react'
import '../styles.css'




export const Story = ({children}) => {
    return(
        <div className='story'>
            {children}
        </div>
    );
};

const StoryCarousel = ({children}) => {

    const [activeIndex, setActiveIndex] = useState(0);


    const updateIndex = (newIndex) => {
        if(newIndex<0){
            newIndex = 0;
        }else if (newIndex >= React.Children.count(children)) {
            newIndex =  React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    }

    console.log(activeIndex);
    console.log(React.Children.count(children));

  return (
    <div className='story-carousel'>
        <div className='inner' style={{transform: `translateX(-${activeIndex * 50}%)`}} >
            {React.Children.map(children, (child) => {
                return React.cloneElement(child);
            })}
        </div>
        <div className='button-left'>
            <button onClick={() => {
                updateIndex(activeIndex - 1);
            }} >&lt;</button>
        </div>
        <div className='button-right'>
            <button onClick={() => {
                updateIndex(activeIndex + 1);
            }} ><p>&gt;</p></button>
        </div>
    </div>
  )
}

export default StoryCarousel