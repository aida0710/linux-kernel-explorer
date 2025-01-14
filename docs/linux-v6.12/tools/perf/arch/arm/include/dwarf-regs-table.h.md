---
sidebar_position: 2
---
# dwarf-regs-table.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/arm/include/dwarf-regs-table.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef DEFINE_DWARF_REGSTR_TABLE
/* This is included in perf/util/dwarf-regs.c */

static const char * const arm_regstr_tbl[] = {
	"%r0", "%r1", "%r2", "%r3", "%r4",
	"%r5", "%r6", "%r7", "%r8", "%r9", "%r10",
	"%fp", "%ip", "%sp", "%lr", "%pc",
};
#endif

```
