import java.util.*;
public class RomanToInteger{
    public static int romanToInteger (String str){

       //Storing all corresponding roman to Integer values in HashMap
       HashMap<Character,Integer>map=new HashMap<>();
       map.put('I',1);
       map.put('V',5);
       map.put('X',10);
       map.put('L',50);
       map.put('C',100);
       map.put('D',500);
       map.put('M',1000);
      
      //storing last element value in index;
      //map.get(str.charAt(i)) < map.get(str.charAt(i+1)) then we are reducing map.get(str.charAt(i)) form it.
      // or else we add the value;
      int result=map.get(str.charAt(str.length()-1));
      for(int i=str.length()-2;i>=0;i--){
        if(map.get(str.charAt(i)) < map.get(str.charAt(i+1))){
             result-=map.get(str.charAt(i));
        }
        else{
            result+=map.get(str.charAt(i));
        }
      }

       return result;
    }
    public static void main(String []args){
        //Taking roman string as input
        Scanner sc=new Scanner(System.in);
        String str=sc.next();
        sc.close();

        //calling the function
        int ans=romanToInteger(str);
        System.out.println(ans);
    }
}
//Time Complexity:O(n) where n is length of the string;
//Space Complexity:O(7)  for stroing values in hashmap.we can say it as constant space.