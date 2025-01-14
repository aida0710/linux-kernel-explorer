---
sidebar_position: 54
---
# unaligned.h

### ファイル情報

- パス: `linux-v6.12/arch/parisc/kernel/unaligned.h`

### コンテンツ

```h
struct pt_regs;
void handle_unaligned(struct pt_regs *regs);
int check_unaligned(struct pt_regs *regs);

```
