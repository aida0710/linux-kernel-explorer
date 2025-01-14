---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/video/fbdev/mmp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_MMP_DISP) += mmp_disp.o hw/ panel/ fb/

mmp_disp-y		+= core.o

```
