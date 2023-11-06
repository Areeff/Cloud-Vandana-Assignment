//function to merge the divided parts
function merge(arr, l, m, r){
    var n1 = m - l + 1;
    var n2 = r - m;
    // Create temparary arrays
    var L = new Array(n1); 
    var R = new Array(n2);
    // Copy data to temp arrays 
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    // Merge the temp arrays back into arr[l..r]
    var i = 0;
    var j = 0;
    var k = l;
    while (i < n1 && j < n2) {
        if (L[i] >= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    // Copy the remaining elements of left array
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    // Copy the remaining elements of right array
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
 
//function that divides array in to two parts
function mergeSort(arr,l, r){
    if(l>=r)   return;
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}

 
// Function to print an array
function printArray( arr, n){
    for (var i = 0; i < n; i++)
       console.log(  arr[i] + " ");
}

 
 //User input
var arr = [ 12, 11, 13, 5, 6, 7 ];
var arr_size = arr.length;
//function call
mergeSort(arr, 0, arr_size - 1);
//printing ouput after sorting
printArray(arr, arr_size);


//Time Complexity:O(nlogn)
//Space Complexity:O(n)  where n is length of the array