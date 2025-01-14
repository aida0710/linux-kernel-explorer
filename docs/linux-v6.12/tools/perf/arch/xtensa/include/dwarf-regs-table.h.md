---
sidebar_position: 1
---
# dwarf-regs-table.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/xtensa/include/dwarf-regs-table.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef DEFINE_DWARF_REGSTR_TABLE
/* This is included in perf/util/dwarf-regs.c */

static const char * const xtensa_regstr_tbl[] = {
	"a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7",
	"a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15",
};
#endif

```
