---
sidebar_position: 3
---
# fault.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/mm/fault.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

struct pt_regs;

int do_page_fault(struct pt_regs *regs, unsigned long address,
		  unsigned long error_code);
int send_fault_sig(struct pt_regs *regs);

```
