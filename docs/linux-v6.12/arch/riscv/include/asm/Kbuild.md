---
sidebar_position: 62
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/arch/riscv/include/asm/Kbuild`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
syscall-y += syscall_table_32.h
syscall-y += syscall_table_64.h

generic-y += early_ioremap.h
generic-y += flat.h
generic-y += kvm_para.h
generic-y += mmzone.h
generic-y += parport.h
generic-y += spinlock.h
generic-y += spinlock_types.h
generic-y += qrwlock.h
generic-y += qrwlock_types.h
generic-y += user.h
generic-y += vmlinux.lds.h

```
