---
sidebar_position: 3
---
# special.c

### ファイル情報

- パス: `linux-v6.12/tools/objtool/arch/powerpc/special.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later
#include <string.h>
#include <stdlib.h>
#include <objtool/special.h>
#include <objtool/builtin.h>


bool arch_support_alt_relocation(struct special_alt *special_alt,
				 struct instruction *insn,
				 struct reloc *reloc)
{
	exit(-1);
}

struct reloc *arch_find_switch_table(struct objtool_file *file,
				    struct instruction *insn)
{
	exit(-1);
}

```
