import { StyleSheet } from 'react-native';
import { AppColors } from '../utils/colors';

export const noteCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:AppColors.WHITE ,
   padding: 10,
   margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bubbleContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
    paddingLeft: 5,
  },
  bubble:{
    width: 20,
    height: 20,
    borderRadius: 25,
    backgroundColor: AppColors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer:{
    flex: 8,
    paddingLeft: 10,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.SECONDARY,
  },
  description:{
    fontSize: 16,
    color: AppColors.GREY,
    marginVertical: 5,
  },
  date:{
    fontSize: 14,
    color: AppColors.GREY,
    marginVertical: 5,
  },
  buttonContainer: {
   
    justifyContent: 'space-around',
  },
})
