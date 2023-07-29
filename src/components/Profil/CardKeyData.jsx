import React, { useEffect, useState } from 'react'
import styles from '../../styles/CardKeyData.module.css'
import imageCalories from '../../assets/calories-icon.jpg'
import imageCarbs from '../../assets/carbs-icon.jpg'
import imageFat from '../../assets/fat-icon.jpg'
import imageProtein from '../../assets/protein-icon.jpg'

const CardKeyData = ({type,value}) => {
    const [imageUrl,setImageUrl] = useState('') 
    const [unit,setUnit] = useState('') 
    const [convertValue,setConvertValue] = useState(value) 

    useEffect(() => {
        switch (type) {
            case "Calories": 
                setImageUrl(imageCalories)
                setUnit('Kcal')
                setConvertValue(new Intl.NumberFormat("en-IN", 
                {maximumSignificantDigits: 3,})
                .format(value))
            break;
            case "Proteines": 
                setImageUrl(imageCarbs)
                setUnit('g')
                setConvertValue(value)
            break;
            case "Glucides": 
                setImageUrl(imageFat)
                setUnit('g')
                setConvertValue(value)
            break;
            case "Lipides": 
                setImageUrl(imageProtein)
                setUnit('g')
                setConvertValue(value)
            break;
            default: break;
        }
    }, [type,value])

    return (
        <div className={styles.cardKeyData}>
            <img 
                className={styles.imageCardKeyData} 
                src={imageUrl} 
                alt="icon-card" 
            />
            <div className={styles.infoCardKeyData}>
                <span>{convertValue +unit}</span>
                <p  >{type}</p>
            </div>
        </div>
    )
}


export default CardKeyData