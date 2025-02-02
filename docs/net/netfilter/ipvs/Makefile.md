---
sidebar_position: 33
---
# Makefile

### ファイル情報

- パス: `net/netfilter/ipvs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the IPVS modules on top of IPv4.
#

# IPVS transport protocol load balancing support
ip_vs_proto-objs-y :=
ip_vs_proto-objs-$(CONFIG_IP_VS_PROTO_TCP) += ip_vs_proto_tcp.o
ip_vs_proto-objs-$(CONFIG_IP_VS_PROTO_UDP) += ip_vs_proto_udp.o
ip_vs_proto-objs-$(CONFIG_IP_VS_PROTO_AH_ESP) += ip_vs_proto_ah_esp.o
ip_vs_proto-objs-$(CONFIG_IP_VS_PROTO_SCTP) += ip_vs_proto_sctp.o

ip_vs-extra_objs-y :=
ip_vs-extra_objs-$(CONFIG_IP_VS_NFCT) += ip_vs_nfct.o

ip_vs-objs :=	ip_vs_conn.o ip_vs_core.o ip_vs_ctl.o ip_vs_sched.o	   \
		ip_vs_xmit.o ip_vs_app.o ip_vs_sync.o	   		   \
		ip_vs_est.o ip_vs_proto.o ip_vs_pe.o			   \
		$(ip_vs_proto-objs-y) $(ip_vs-extra_objs-y)


# IPVS core
obj-$(CONFIG_IP_VS) += ip_vs.o

# IPVS schedulers
obj-$(CONFIG_IP_VS_RR) += ip_vs_rr.o
obj-$(CONFIG_IP_VS_WRR) += ip_vs_wrr.o
obj-$(CONFIG_IP_VS_LC) += ip_vs_lc.o
obj-$(CONFIG_IP_VS_WLC) += ip_vs_wlc.o
obj-$(CONFIG_IP_VS_FO) += ip_vs_fo.o
obj-$(CONFIG_IP_VS_OVF) += ip_vs_ovf.o
obj-$(CONFIG_IP_VS_LBLC) += ip_vs_lblc.o
obj-$(CONFIG_IP_VS_LBLCR) += ip_vs_lblcr.o
obj-$(CONFIG_IP_VS_DH) += ip_vs_dh.o
obj-$(CONFIG_IP_VS_SH) += ip_vs_sh.o
obj-$(CONFIG_IP_VS_MH) += ip_vs_mh.o
obj-$(CONFIG_IP_VS_SED) += ip_vs_sed.o
obj-$(CONFIG_IP_VS_NQ) += ip_vs_nq.o
obj-$(CONFIG_IP_VS_TWOS) += ip_vs_twos.o

# IPVS application helpers
obj-$(CONFIG_IP_VS_FTP) += ip_vs_ftp.o

# IPVS connection template retrievers
obj-$(CONFIG_IP_VS_PE_SIP) += ip_vs_pe_sip.o

```
