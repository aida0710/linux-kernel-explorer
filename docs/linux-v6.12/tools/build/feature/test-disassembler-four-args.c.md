---
sidebar_position: 11
---
# test-disassembler-four-args.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-disassembler-four-args.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <bfd.h>
#include <dis-asm.h>

int main(void)
{
	bfd *abfd = bfd_openr(NULL, NULL);

	disassembler(bfd_get_arch(abfd),
		     bfd_big_endian(abfd),
		     bfd_get_mach(abfd),
		     abfd);

	return 0;
}

```
