---
sidebar_position: 21
---
# Makefile

### ファイル情報

- パス: `net/rds/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_RDS) += rds.o
rds-y :=	af_rds.o bind.o cong.o connection.o info.o message.o   \
			recv.o send.o stats.o sysctl.o threads.o transport.o \
			loop.o page.o rdma.o

obj-$(CONFIG_RDS_RDMA) += rds_rdma.o
rds_rdma-y :=	rdma_transport.o \
			ib.o ib_cm.o ib_recv.o ib_ring.o ib_send.o ib_stats.o \
			ib_sysctl.o ib_rdma.o ib_frmr.o


obj-$(CONFIG_RDS_TCP) += rds_tcp.o
rds_tcp-y :=		tcp.o tcp_connect.o tcp_listen.o tcp_recv.o \
			tcp_send.o tcp_stats.o

ccflags-$(CONFIG_RDS_DEBUG)	:=	-DRDS_DEBUG

# for GCOV coverage profiling
ifdef CONFIG_GCOV_PROFILE_RDS
GCOV_PROFILE := y
endif

```
