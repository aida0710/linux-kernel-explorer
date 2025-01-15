---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `net/dns_resolver/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux DNS Resolver.
#

obj-$(CONFIG_DNS_RESOLVER) += dns_resolver.o

dns_resolver-y :=  dns_key.o dns_query.o

```
