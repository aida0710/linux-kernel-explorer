---
sidebar_position: 106
---
# test_xdp_vlan_mode_generic.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/test_xdp_vlan_mode_generic.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

# Exit on failure
set -e

# Wrapper script to test generic-XDP
export TESTNAME=xdp_vlan_mode_generic
./test_xdp_vlan.sh --mode=xdpgeneric

```
