---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/s390/net/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Arch-specific network modules
#
obj-$(CONFIG_BPF_JIT) += bpf_jit_comp.o
obj-$(CONFIG_HAVE_PNETID) += pnet.o

```
