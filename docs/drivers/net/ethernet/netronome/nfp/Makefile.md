---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/netronome/nfp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_NFP)	+= nfp.o

nfp-objs := \
	    nfpcore/nfp6000_pcie.o \
	    nfpcore/nfp_cppcore.o \
	    nfpcore/nfp_cpplib.o \
	    nfpcore/nfp_dev.o \
	    nfpcore/nfp_hwinfo.o \
	    nfpcore/nfp_mip.o \
	    nfpcore/nfp_mutex.o \
	    nfpcore/nfp_nffw.o \
	    nfpcore/nfp_nsp.o \
	    nfpcore/nfp_nsp_cmds.o \
	    nfpcore/nfp_nsp_eth.o \
	    nfpcore/nfp_resource.o \
	    nfpcore/nfp_rtsym.o \
	    nfpcore/nfp_target.o \
	    ccm.o \
	    ccm_mbox.o \
	    devlink_param.o \
	    nfp_asm.o \
	    nfd3/dp.o \
	    nfd3/rings.o \
	    nfd3/xsk.o \
	    nfdk/dp.o \
	    nfdk/rings.o \
	    nfp_app.o \
	    nfp_app_nic.o \
	    nfp_devlink.o \
	    nfp_hwmon.o \
	    nfp_main.o \
	    nfp_net_common.o \
	    nfp_net_dp.o \
	    nfp_net_ctrl.o \
	    nfp_net_debugdump.o \
	    nfp_net_ethtool.o \
	    nfp_net_main.o \
	    nfp_net_repr.o \
	    nfp_net_sriov.o \
	    nfp_net_xsk.o \
	    nfp_netvf_main.o \
	    nfp_port.o \
	    nfp_shared_buf.o \
	    nic/main.o

ifeq ($(CONFIG_TLS_DEVICE),y)
nfp-objs += \
	    crypto/tls.o
endif

ifeq ($(CONFIG_NFP_APP_FLOWER),y)
nfp-objs += \
	    flower/action.o \
	    flower/cmsg.o \
	    flower/lag_conf.o \
	    flower/main.o \
	    flower/match.o \
	    flower/metadata.o \
	    flower/offload.o \
	    flower/tunnel_conf.o \
	    flower/qos_conf.o \
	    flower/conntrack.o
endif

ifeq ($(CONFIG_BPF_SYSCALL),y)
nfp-objs += \
	    bpf/cmsg.o \
	    bpf/main.o \
	    bpf/offload.o \
	    bpf/verifier.o \
	    bpf/jit.o
endif

ifeq ($(CONFIG_NFP_APP_ABM_NIC),y)
nfp-objs += \
	    abm/cls.o \
	    abm/ctrl.o \
	    abm/qdisc.o \
	    abm/main.o
endif

nfp-$(CONFIG_NFP_NET_IPSEC) += crypto/ipsec.o nfd3/ipsec.o nfdk/ipsec.o

nfp-$(CONFIG_NFP_DEBUG) += nfp_net_debugfs.o

nfp-$(CONFIG_DCB) += nic/dcb.o

```
