---
sidebar_position: 15
---
# rdvl-sve.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/arm64/fp/rdvl-sve.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only

#include <stdio.h>

#include "rdvl.h"

int main(void)
{
	int vl = rdvl_sve();

	printf("%d\n", vl);

	return 0;
}

```
