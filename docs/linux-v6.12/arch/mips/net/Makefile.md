---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/net/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# MIPS networking code

obj-$(CONFIG_BPF_JIT) += bpf_jit_comp.o

ifeq ($(CONFIG_32BIT),y)
        obj-$(CONFIG_BPF_JIT) += bpf_jit_comp32.o
else
        obj-$(CONFIG_BPF_JIT) += bpf_jit_comp64.o
endif

```
