---
sidebar_position: 13
---
# hid-tablet.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/hid/hid-tablet.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs tests for the HID subsystem

export TARGET=test_tablet.py

bash ./run-hid-tools-tests.sh

```
