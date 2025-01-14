---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arc/plat-tb10x/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Abilis Systems TB10x platform Makefile
#
# Author: Christian Ruppert <christian.ruppert@abilis.com>
#


KBUILD_CFLAGS   += -Iarch/arc/plat-tb10x/include

obj-y += tb10x.o

```
