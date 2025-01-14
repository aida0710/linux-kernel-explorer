---
sidebar_position: 10
---
# test-cxa-demangle.cpp

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-cxa-demangle.cpp`

### コンテンツ

```cpp
// SPDX-License-Identifier: GPL-2.0
#include <stdio.h>
#include <stdlib.h>
#include <cxxabi.h>

int main(void)
{
  size_t len = 256;
  char *output = (char*)malloc(len);
        int status;

        output = abi::__cxa_demangle("FieldName__9ClassNameFd", output, &len, &status);

        printf("demangled symbol: {%s}\n", output);

        return 0;
}

```
