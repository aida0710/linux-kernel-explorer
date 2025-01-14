---
sidebar_position: 5
---
# test-bionic.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-bionic.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <android/api-level.h>

int main(void)
{
	return __ANDROID_API__;
}

```
