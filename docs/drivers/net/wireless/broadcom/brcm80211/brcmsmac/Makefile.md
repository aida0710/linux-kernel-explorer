---
sidebar_position: 25
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/broadcom/brcm80211/brcmsmac/Makefile`

### コンテンツ

```txt
#
# Makefile fragment for Broadcom 802.11n Networking Device Driver
#
# Copyright (c) 2010 Broadcom Corporation
#
# Permission to use, copy, modify, and/or distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
# SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
# OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
# CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

ccflags-y := \
	-I $(src) \
	-I $(src)/phy \
	-I $(src)/../include

brcmsmac-y := \
	mac80211_if.o \
	ucode_loader.o \
	ampdu.o \
	antsel.o \
	channel.o \
	main.o \
	phy_shim.o \
	pmu.o \
	rate.o \
	stf.o \
	aiutils.o \
	phy/phy_cmn.o \
	phy/phy_lcn.o \
	phy/phy_n.o \
	phy/phytbl_lcn.o \
	phy/phytbl_n.o \
	phy/phy_qmath.o \
	dma.o \
	brcms_trace_events.o \
	debug.o

brcmsmac-$(CONFIG_BRCMSMAC_LEDS) += led.o

obj-$(CONFIG_BRCMSMAC)	+= brcmsmac.o

```
