---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/usb/6fire/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
snd-usb-6fire-y += chip.o comm.o midi.o control.o firmware.o pcm.o
obj-$(CONFIG_SND_USB_6FIRE) += snd-usb-6fire.o


```
