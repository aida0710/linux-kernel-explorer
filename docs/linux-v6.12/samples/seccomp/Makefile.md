---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/samples/seccomp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
userprogs-always-y += bpf-fancy dropper bpf-direct user-trap

bpf-fancy-objs := bpf-fancy.o bpf-helper.o

userccflags += -I usr/include

```
