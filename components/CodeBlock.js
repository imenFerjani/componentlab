// components/CodeBlock.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.codeHeader}>
        <Text style={styles.codeTitle}>Code</Text>
        <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
          {copied ? (
            <View style={styles.copiedContainer}>
              <Ionicons name="checkmark" size={16} color="#4CAF50" />
              <Text style={styles.copiedText}>Copied!</Text>
            </View>
          ) : (
            <View style={styles.copyContainer}>
              <Ionicons name="copy-outline" size={16} color="#666" />
              <Text style={styles.copyText}>Copy</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView 
        style={styles.codeContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
      >
        <ScrollView
          style={styles.codeScrollView}
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
        >
          <Text style={styles.codeText}>{code}</Text>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  codeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f8f8f8',
  },
  codeTitle: {
    fontWeight: '500',
    color: '#333',
  },
  copyButton: {
    padding: 4,
  },
  copiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copiedText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#4CAF50',
  },
  copyText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  codeContainer: {
    maxHeight: 300,
  },
  codeScrollView: {
    padding: 16,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#333',
  },
});