---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/x86-android-tablets/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-or-later
#
# X86 Android tablet support Makefile
#

obj-$(CONFIG_X86_ANDROID_TABLETS) += x86-android-tablets.o

x86-android-tablets-y := core.o dmi.o shared-psy-info.o \
			 asus.o lenovo.o other.o

```
