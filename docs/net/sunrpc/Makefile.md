---
sidebar_position: 13
---
# Makefile

### ファイル情報

- パス: `net/sunrpc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for Linux kernel SUN RPC
#


obj-$(CONFIG_SUNRPC) += sunrpc.o
obj-$(CONFIG_SUNRPC_GSS) += auth_gss/
obj-$(CONFIG_SUNRPC_XPRT_RDMA) += xprtrdma/

sunrpc-y := clnt.o xprt.o socklib.o xprtsock.o sched.o \
	    auth.o auth_null.o auth_tls.o auth_unix.o \
	    svc.o svcsock.o svcauth.o svcauth_unix.o \
	    addr.o rpcb_clnt.o timer.o xdr.o \
	    sunrpc_syms.o cache.o rpc_pipe.o sysfs.o \
	    svc_xprt.o \
	    xprtmultipath.o
sunrpc-$(CONFIG_SUNRPC_DEBUG) += debugfs.o
sunrpc-$(CONFIG_SUNRPC_BACKCHANNEL) += backchannel_rqst.o
sunrpc-$(CONFIG_PROC_FS) += stats.o
sunrpc-$(CONFIG_SYSCTL) += sysctl.o

```
