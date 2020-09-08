//
// Created by tim on 28-08-20.
//

#include <iostream>

int main () {
    int wordCount;
    std::cin >> wordCount;
    for (int i = 0; i < wordCount; i++) {
        char* word = new char[100];
        std::cin >> word;
        std::string str = std::string(word);
        if (str.length() <= 10) {
            std::cout << word << std::endl;
            continue;
        }
        std::cout << str.front() << (str.length() - 2) << str.back() << std::endl;
    }
}
