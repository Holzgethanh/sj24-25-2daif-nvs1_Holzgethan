public class FizzBizz{
    public static void ausgabe(){
        var zahl = 0;
        for(int i = 0; i < 100; i++){
            zahl += 1;
            if(zahl % 3 == 0 ){
                System.out.println("Fizz");
            }
            else if(zahl % 5 == 0){
                System.out.println("Buzz");
            }
            else{
                System.out.println(zahl);
            }
        }
    } 
}