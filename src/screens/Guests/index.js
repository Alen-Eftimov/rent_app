import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const GuestsScreen = (props) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    return (
        <View>
            <View style={styles.row}> 
                <View>
                    <Text style={{fontWeight: 'bold'}}>Adults</Text>
                    <Text style={{color: '#8d8d8d'}}>Age 13 or above</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                     onPress={() => setAdults(Math.max(0, adults -1))}
                     style={styles.button} 
                    >
                        <Text style={styles.textButton}>-</Text>
                    </Pressable>
                    <Text style={styles.value}>{adults}</Text>
                    <Pressable
                     onPress={() => setAdults(adults + 1)}
                     style={styles.button}
                    >
                        <Text style={styles.textButton}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}> 
                <View>
                    <Text style={{fontWeight: 'bold'}}>Children</Text>
                    <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                     onPress={() => setChildren(Math.max(0, children -1))}
                     style={styles.button} 
                    >
                        <Text style={styles.textButton}>-</Text>
                    </Pressable>
                    <Text style={styles.value}>{children}</Text>
                    <Pressable
                     onPress={() => setChildren(children + 1)}
                     style={styles.button}
                    >
                        <Text style={styles.textButton}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}> 
                <View>
                    <Text style={{fontWeight: 'bold'}}>Infants</Text>
                    <Text style={{color: '#8d8d8d'}}>Under 2</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                     onPress={() => seInfants(Math.max(0, infants -1))}
                     style={styles.button} 
                    >
                        <Text style={styles.textButton}>-</Text>
                    </Pressable>
                    <Text style={styles.value}>{infants}</Text>
                    <Pressable
                     onPress={() => setInfants(infants + 1)}
                     style={styles.button}
                    >
                        <Text style={styles.textButton}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default GuestsScreen;