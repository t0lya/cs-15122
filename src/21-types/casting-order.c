#include <stdio.h>

int main() {
    unsigned char c = 0xF0;
    int i0 = (int) c;
    int i1 = (int)(unsigned int) c; 
    int i2 = (int)(signed char) c;
    printf("%d\n", i0); //240
    printf("%d\n",i1); //240
    printf("%d\n",i2); //-16
    return 0;
}