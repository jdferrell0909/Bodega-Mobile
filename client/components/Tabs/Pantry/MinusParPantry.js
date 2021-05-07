import React from 'react';
import {Pressable, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
// import {useDispatch} from 'react-redux';
// import {minusBy} from '../../../store/actions/shoppingActions';

//Decrements required stock QTY
export default function MinusParPantry({id}){
   //   const dispatch = useDispatch();
  return (<View>
    <Pressable
          id="minusPar-btn"
          style={tailwind(
            'relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-500',
          )}>
           <Text style={tailwind('font-bold')}>-</Text>
          </Pressable>
  </View>);
};

