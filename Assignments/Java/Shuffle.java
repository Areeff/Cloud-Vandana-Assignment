import java.util.*;

public class Shuffle {
    public static void shuffleArray(int arr[]){
        int n=arr.length;
        //edge case
        if(n==0||n==1 ) return;
        int r, temp;
        //traversing array from the back we can traverse from front too
        for(int i=n-1; i>0; i--){
            //math.random will give output 0<=math.random()<1. since 1 is not included we need to take i+1.
            //generating random index
            r=(int)(Math.random()*(i+1));

            //swapping the elements with the random index
            temp=arr[r];
            arr[r]=arr[i];
            arr[i]=temp;
        }
    }

    public static void main(String[] args) {
        //Inorder to take input we use scanner class
        Scanner sc = new Scanner(System.in);
        
        //Mentioning the length of the array as userInput
        int n = sc.nextInt();

        //creating the array with given input size.(or) we can directly take array as input (int arr[]={1,2,3,4,5})
        int arr[] = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        sc.close();

        //calling the function
        shuffleArray(arr); 
        
        //printing output in string format. we can print using loops also.
        System.out.println(Arrays.toString(arr));
    }
}
//Time Complexity:O(n) where n is length of the array.
//Space Complexity:O(1) no extra space is used to solve the problem.