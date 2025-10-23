#include <limits.h>

#define FLOAT_IS_32_BITS  ((sizeof float * CHAR_BIT) == 32)

#if FLOAT_IS_32_BITS
#  include <stdio.h>
int main(void) {
    printf("float is 32 bits!\n");
    return 0;
}
#else
#  error "float is not 32 bits!"
#endif
