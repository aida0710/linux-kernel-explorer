---
sidebar_position: 40
---
# Makefile.syscalls

### ファイル情報

- パス: `linux-v6.12/arch/riscv/kernel/Makefile.syscalls`

### コンテンツ

```syscalls
# SPDX-License-Identifier: GPL-2.0

syscall_abis_32 += riscv memfd_secret
syscall_abis_64 += riscv rlimit memfd_secret

```
