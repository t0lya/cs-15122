#include <stdio.h>
#include "xalloc.h"

int main() {
    int *A = xmalloc(sizeof(int));
    A[0] = 23;
    // assign to unallocated memory;
    A[1] = 32;
    A[2] = 23;
    A[-1] = 5;
    printf("A[2] = %d\n", A[2]);
    printf("A[-1] = %d\n", A[-1]);
    return 0;
}
