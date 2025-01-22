#include <stdio.h>

int main() {
    int n;

    // Taking user input for 'n'
    printf("Enter the number of rows: ");
    scanf("%d", &n);

    // Loop to print the pattern
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d", j);
        }
        printf("\n");
    }

    return 0;
}
