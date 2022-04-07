import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image}
                source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"}}
            />

            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. 
            </Text>

            {/* Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$45</Text>
                <Text style={styles.price}>  $38 </Text>
                / night
            </Text>

            {/* Total price */}
            <Text style={styles.totalPrice}>$267 total</Text>

        </View>
    );
};

export default Post;