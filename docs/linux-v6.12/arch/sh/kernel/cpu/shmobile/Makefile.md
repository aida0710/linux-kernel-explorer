---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/sh/kernel/cpu/shmobile/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Linux/SuperH SH-Mobile backends.
#

# Power Management & Sleep mode
obj-$(CONFIG_PM)	+= pm.o sleep.o
obj-$(CONFIG_CPU_IDLE)	+= cpuidle.o

```
