import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, MessageSquare } from 'lucide-react';
import { FAQS_DATA } from '../data/tourismData';

interface FAQViewProps {
  onOpenContact: () => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onOpenContact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);

  const categories = ['All', 'Planning', 'Kerala', 'Tamil Nadu', 'Transport & Cabs', 'Temples & Culture'];

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4 text-emerald-700" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
          Everything You Need to Know Before Traveling
        </h2>
        <p className="text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Straightforward answers to the most common traveler queries regarding season timing, temple permits, taxi rentals, and authentic houseboats.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-stone-50 rounded-xl border border-stone-200 text-stone-500 text-xs">
            No questions match your search. Click below to ask our team directly.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {faq.category}
                    </span>
                    <span className="font-serif font-bold text-sm sm:text-base text-stone-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 border-t border-stone-100 text-xs text-stone-600 leading-relaxed bg-stone-50/40 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Contact Prompt */}
      <div className="p-5 rounded-xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 text-stone-700">
          <MessageSquare className="w-5 h-5 text-emerald-800 shrink-0" />
          <span>
            Have a custom travel question or need personal route advice for your family?
          </span>
        </div>
        <button
          onClick={onOpenContact}
          className="px-4 py-2 font-semibold text-white bg-emerald-900 rounded-lg hover:bg-emerald-800 transition-colors whitespace-nowrap cursor-pointer shadow-xs"
        >
          Ask Thamarai Selvam
        </button>
      </div>
    </div>
  );
};
