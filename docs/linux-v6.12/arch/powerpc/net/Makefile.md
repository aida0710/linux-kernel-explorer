---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/net/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Arch-specific network modules
#
obj-$(CONFIG_BPF_JIT) += bpf_jit_comp.o bpf_jit_comp$(BITS).o

```
