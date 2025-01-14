---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/typec/altmodes/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_TYPEC_DP_ALTMODE)		+= typec_displayport.o
typec_displayport-y			:= displayport.o
obj-$(CONFIG_TYPEC_NVIDIA_ALTMODE)	+= typec_nvidia.o
typec_nvidia-y				:= nvidia.o

```
