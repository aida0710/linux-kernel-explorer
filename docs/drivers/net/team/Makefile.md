---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/team/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the network team driver
#

team-y:= team_core.o team_nl.o
obj-$(CONFIG_NET_TEAM) += team.o
obj-$(CONFIG_NET_TEAM_MODE_BROADCAST) += team_mode_broadcast.o
obj-$(CONFIG_NET_TEAM_MODE_ROUNDROBIN) += team_mode_roundrobin.o
obj-$(CONFIG_NET_TEAM_MODE_RANDOM) += team_mode_random.o
obj-$(CONFIG_NET_TEAM_MODE_ACTIVEBACKUP) += team_mode_activebackup.o
obj-$(CONFIG_NET_TEAM_MODE_LOADBALANCE) += team_mode_loadbalance.o

```
