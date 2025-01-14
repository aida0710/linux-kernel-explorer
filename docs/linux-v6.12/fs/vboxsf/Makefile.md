---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/vboxsf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: MIT

obj-$(CONFIG_VBOXSF_FS) += vboxsf.o

vboxsf-y := dir.o file.o utils.o vboxsf_wrappers.o super.o

```
