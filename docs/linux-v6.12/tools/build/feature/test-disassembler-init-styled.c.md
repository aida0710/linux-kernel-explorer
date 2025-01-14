---
sidebar_position: 12
---
# test-disassembler-init-styled.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-disassembler-init-styled.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <stdio.h>
#include <dis-asm.h>

int main(void)
{
	struct disassemble_info info;

	init_disassemble_info(&info, stdout,
			      NULL, NULL);

	return 0;
}

```
