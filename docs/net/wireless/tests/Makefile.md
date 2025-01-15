---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `net/wireless/tests/Makefile`

### コンテンツ

```txt
cfg80211-tests-y += module.o fragmentation.o scan.o util.o chan.o

obj-$(CONFIG_CFG80211_KUNIT_TEST) += cfg80211-tests.o

```
